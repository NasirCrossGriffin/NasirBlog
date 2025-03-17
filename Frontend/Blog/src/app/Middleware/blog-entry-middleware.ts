import { isDevMode } from "@angular/core";

import { environment } from '../../environments/environment';

const BASE_URL : string =  isDevMode() ? environment.BASE_URL : "";

export const getAllBlogEntries = async () => {
  try {
    const blogEntriesResponse = await fetch(`${BASE_URL}/api/blog`, {
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
    const blogEntryResponse = await fetch(`${BASE_URL}/api/blog`, {
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
