import { create } from 'zustand';

/**
 * Represents the state and actions for an upload modal component.
 * @interface UploadModalStore
 * @property {boolean} isOpen - Flag indicating if the modal is open or closed.
 * @property {() => void} onOpen - Function to open the modal.
 * @property {() => void} onClose - Function to close the modal.
 */
interface UploadModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

/**
 * Custom hook for managing a modal state.
 * @param {UploadModalStore} set - Function to update the modal state.
 * @returns An object containing isOpen state and functions to open and close the modal.
 */
const useModal = create<UploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
