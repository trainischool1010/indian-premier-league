import { environment } from "../environment/environment";


export const urlConstant = {
  TickettypeAPI: {
    getTickettype: environment.APIUrl + 'tickettype/getAllTickettype',
  },
  SiteConfigAPI: {
    getSiteConfig: environment.APIUrl + 'siteconfig/getSiteconfig',
  },
  MatchAPI: {
    getMatches: environment.APIUrl + 'match/getAllMatch',
    getMatchDetail: environment.APIUrl + 'match/getMatchById/',
  },
}