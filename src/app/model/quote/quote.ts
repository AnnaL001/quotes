export class Quote {
  upvote: number;
  downvote: number;
  dateCreated: Date;
  showDetails: boolean;

  constructor(
    public id: number,
    public quoteText: string,
    public author: string,
    public submittedBy: string){
      this.upvote = 0;
      this.downvote = 0;
      this.dateCreated = new Date();
      this.showDetails = false;
    }
}
