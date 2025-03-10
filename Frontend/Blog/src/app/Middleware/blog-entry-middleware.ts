
export const getAllBlogEntries = async () => {
  try {
    const blogEntriesResponse = await fetch("http://localhost:3000/api/blog ", {
      headers : {"Content-Type" : "application/json"},
      method : "GET",
    })

    if (blogEntriesResponse.ok) {
      const blogEntries = await blogEntriesResponse.json();
      return blogEntries;
    }

    return null;
  } catch (error) {
    return error
  }
}

export const createBlogEntry = async (title : string, content : string, datetime : Date) => {
  console.log(title, content, datetime)
  try {
    const blogEntryResponse = await fetch("http://localhost:3000/api/blog", {
      headers : {"Content-Type" : "application/json"},
      method : "POST",
      body : JSON.stringify({
        title : title,
        content : content,
        datetime : datetime
      })
    })

    if (blogEntryResponse.ok) {
      const blogEntry = await blogEntryResponse.json();
      return blogEntry;
    }

    return null;
  } catch (error) {
    return error;
  }
}
