// Encompasses Mangas, Webcomic, Novel
interface IContent {
  type: {
    structure: "COMIC/PANEL" | "COMIC/LONG-STRIP" | "NOVEL"
    category: "MANGA" | "MANGA/ONESHOT" | "MANWHA" | "MANHUA" | "OEL" | "NOVEL"
    isUserGenerated: boolean
  },
  information: {
    id: string,
    name: string,
    description: string,
    status: IContentCompletionStatus,
    creators: IUser[] | ICreator[]
  },
  covers: IContentCover[],
  chapters: IContentChapter[],
  tags: IContentTag[]
}

interface IContentCover {
  src: string,
  name: string,
  order: number,
}

interface IContentChapter {
  chapterNumber: number,
  chapterName?: string,
  chapterPages: IContentChapterPage[]
}

interface IContentChapterPage {
  pageNumber: number,
  src: string
}

interface IContentTag {
  name: string,
  tagType: IContentTagTypes[]
}

interface IContentCreator {
  type: "AUTHOR" | "ARTIST" | "AUTHOR+ARTIST"
  information: {
    creatorId: string
  }
}

enum IContentTagTypes {
  "THEMES",
  "NARRATIVE-TROPES",
  "OCCUPATIONS",
  "ACTIVITIES",
  "CHARACTER-TRAITS",
  "CHARACTER-TYPES",
  "TIME-PERIOD",
  "LOCATIONS",
  "AUDIENCE-DEMOGRAPHICS"
}

enum IContentCompletionStatus {
  "ON-GOING",
  "HIATUS",
  "AXED",
  "COMPLETED"
}