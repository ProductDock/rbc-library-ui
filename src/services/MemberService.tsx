import { Member } from "../store/members/Types";
import client from "./client";

export const fetchAllMembers = async () => client.get("/members");

export const createMember = async (member: Member) => client.post("/members", member);
