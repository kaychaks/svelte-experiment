import type ID from './ID';

interface Note {
	kind: 'Note';
	/**
	 * @default "New Note"
	 */
	title: string;
	createdAt: Date;
	details?: string;
	id: ID;
}

export default Note;
