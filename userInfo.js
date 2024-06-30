// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => ({
        originalName: originalName,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
const originalNames = ["Alexander", "Acheampong", "Osei"];
 const modifiedNames = ["ALexander", "acheampong", "osei"];
 console.log(createUserProfiles(originalNames, modifiedNames));
Output: [
  { originalName: "Alexander", modifiedName: "ALexander", id: 1 },
  { originalName: "Acheampong", modifiedName: "acheampong", id: 2 },
  { originalName: "Osei", modifiedName: "osei", id: 3 }
]
