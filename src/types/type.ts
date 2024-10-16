export interface GetPageResponse {
  Page: Page
}

export interface Page {
  users?: User[]
  mediaTrends?: Media[]
}

export interface User {
  id: string
  name: string
  about: string
}

export interface Media {
  trending: number
  mediaId: number
  popularity: number
}
