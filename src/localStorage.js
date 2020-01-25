export const saveGroups = groups => localStorage.setItem("groups", JSON.stringify(groups));

export const fetchGroups = () => localStorage.getItem("groups");
