// <адрес страницы, позиция скролла>
export type ScrollStopSchemaType = Record<string, number>;

export interface ScrollStopSchema {
	scroll: { [key: string]: number };
}