export type ToolReqType = {
  usedFrom: number;
  tools: UsedToolType[];
};

export type UsedToolType = {
  toolId: string;
  count: number;
  victimRowId?: string;
};
