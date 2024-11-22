import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';
import { v } from 'convex/values';

const schema = defineSchema({
  ...authTables,

  // Table for courses
  courses: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.union(
      v.literal('webDev'),
      v.literal('html'),
      v.literal('css'),
      v.literal('javascript'),
      v.literal('react'),
      v.literal('tailwind')
    ),
    createdBy: v.id('users'), // Instructor's ID
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
  }).index('by_created_by', ['createdBy']),

  // Table for lessons
  lessons: defineTable({
    courseId: v.id('courses'),
    title: v.string(),
    content: v.string(),
    videoUrl: v.optional(v.string()),
    order: v.number(),
    createdAt: v.number(),
  })
    .index('by_course_id', ['courseId'])
    .index('by_course_id_order', ['courseId', 'order']),

  // Table for enrollments
  enrollments: defineTable({
    userId: v.id('users'),
    courseId: v.id('courses'),
    enrolledAt: v.number(),
  })
    .index('by_user_id', ['userId'])
    .index('by_course_id', ['courseId'])
    .index('by_user_id_course_id', ['userId', 'courseId']),

  // Table for quizzes
  quizzes: defineTable({
    courseId: v.id('courses'),
    title: v.string(),
    questions: v.array(
      v.object({
        question: v.string(),
        options: v.array(v.string()),
        correctAnswer: v.string(),
      })
    ),
    createdAt: v.number(),
  }).index('by_course_id', ['courseId']),

  // Table for feedback
  feedback: defineTable({
    userId: v.id('users'),
    courseId: v.id('courses'),
    rating: v.number(),
    comment: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index('by_course_id', ['courseId'])
    .index('by_user_id', ['userId']),

  // Table for battlepass
  battlepass: defineTable({
    title: v.string(),
    description: v.string(),
    startDate: v.number(),
    endDate: v.number(),
    createdBy: v.id('users'),
    createdAt: v.number(),
  }),

  // Table for battle pass tiers
  battlepassTiers: defineTable({
    battlepassId: v.id('battlepass'),
    tier: v.number(),
    reward: v.object({
      name: v.string(),
      description: v.string(),
      imageUrl: v.optional(v.string()),
    }),
    requirePoints: v.number(),
  })
    .index('by_battlepass_id', ['battlepassId'])
    .index('by_battlepass_id_tier', ['battlepassId', 'tier']),

  // Table for user progress in battle pass
  userBattlepassProgress: defineTable({
    userId: v.id('users'),
    battlepassId: v.id('battlepass'),
    currentPoints: v.number(),
    currentTier: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index('by_user_id', ['userId'])
    .index('by_battle_pass_id', ['battlepassId'])
    .index('by_user_id_battle_pass_id', ['userId', 'battlepassId']),
});

export default schema;
