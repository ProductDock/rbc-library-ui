/* eslint-disable no-unused-vars */
export interface Member {
  id?: string;
  firstName: string;
  lastName: string;
}

export interface IMembersContext {
  members: Member[];
  loading: boolean;
  error: string | null;
  findAllMembers?: () => void;
  createMember?: (member: Member) => void;
}
