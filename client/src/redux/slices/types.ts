export interface IReqData {
  username?: string;
  login: string;
  password: string;
}

export interface IUser {
  avatarUrl: string;
  createdAt: string;
  login: string;
  passwordHash: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}

export interface IPost {
  createdAt: string;
  imageUrl: string;
  tags: string[];
  text: string;
  title: string;
  updatedAt: string;
  user: IUser;
  viewsCount: number;
  __v: number;
  _id: string;
}

export interface IData {
  userData: IUser;
  posts: IPost[];
}

export interface IinitialState {
  data: null | IData;
  status: string;
}
