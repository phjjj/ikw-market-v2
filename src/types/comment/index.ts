export interface ICommentList {
  comments: IComments[] | [];
  productId: string;
  id: string;
}

export interface IComments {
  userId: string;
  userName: string;
  userImage: string;
  id: string;
  text: string;
  createdAt: number;
}
