import { HttpHeaderResponse, HttpHeaders } from "@angular/common/http";

export const ContentTypeJsonHeaders = {
  options: new HttpHeaderResponse({
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-cache"
    })
  })
};
