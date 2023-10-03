const videoQueryRepo = {
  getVideos(): VideoOutputModel[] {
    const dbVideos: DBVideo[] = [];
    const authors: DBAuthor[] = [];
    return dbVideos.map((dbVideo) => {
      const author = authors.find((a) => a._id === dbVideo.authorId);
      return this._mapDBVideoToVideoOutputModel(dbVideo, author!);
    });
  },

  getVideoById(id: string): VideoOutputModel {
    const dbVideo: DBVideo = {
      _id: "182743",
      title: "dkj",
      authorId: "83247",
	  banObject: null
    };
    const author: DBAuthor = {
      _id: "83247",
      firstName: "Mick",
      lastName: "bread",
    };
    return this._mapDBVideoToVideoOutputModel(dbVideo, author);
  },

  getBannedVideo(id: string): BunnedVideoOutputModel[] {
    const dbVideos: DBVideo[] = [];
    const authors: DBAuthor[] = [];
    return dbVideos.map((dbVideo) => {
      const dbAuthor = authors.find((a) => a._id === dbVideo.authorId);
      return {
        id: dbVideo._id,
        title: dbVideo.title,
        author: {
          id: dbAuthor!._id,
          name: dbAuthor!.firstName + " " + dbAuthor!.lastName,
        },
		banReason: dbVideo.banObject!.banReason
      };
    });
  },

  _mapDBVideoToVideoOutputModel(dbVideo: DBVideo, author: DBAuthor) {
    return {
      id: dbVideo._id,
      title: dbVideo.title,
      author: {
        id: author!._id,
        name: author!.firstName + " " + author!.lastName,
      },
    };
  },
};

type DBAuthor = {
  _id: string;
  firstName: string;
  lastName: string;
};

type DBVideo = {
  _id: string;
  title: string;
  authorId: string;
  banObject: null | {
	isBanned: boolean
	banReason: string
  }
};

export type VideoOutputModel = {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
  };
};

export type BunnedVideoOutputModel = VideoOutputModel & {
  banReason: string;
};