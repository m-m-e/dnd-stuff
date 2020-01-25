export const saveGroups = groups => localStorage.setItem("groups", JSON.stringify(groups));

export const fetchGroups = () => localStorage.getItem("groups");

export const saveSelectedGroup = group => localStorage.setItem("selected group", JSON.stringify(group));

export const fetchSelectedGroup = () => localStorage.getItem("selected group");
