// Live Score Integration using cricketdata.org

const API_KEY = '1e768420-7aa3-46d2-951b-3ac2eadc1711';
const BASE_URL = 'https://api.cricketdata.org/v1';

export interface LiveMatchData {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  team1: string;
  team2: string;
  team1Score: string;
  team2Score: string;
}

export const fetchLiveMatches = async (): Promise<LiveMatchData[]> => {
  try {
    const response = await fetch(`${BASE_URL}/cricScore?apikey=${API_KEY}`);
    const json = await response.json();

    if (json.status !== "success" || !json.data) {
      console.warn("API returned non-success status:", json);
      return [];
    }

    return json.data.map((match: any) => {
      // Map the cricScore endpoint format to our UI format
      return {
        id: match.id || Date.now().toString(),
        name: match.series || match.name || 'Live Cricket Match',
        matchType: match.matchType || 'T20',
        status: match.status || 'Live',
        venue: match.venue || 'Stadium',
        team1: match.t1 || match.teams?.[0] || 'Team 1',
        team2: match.t2 || match.teams?.[1] || 'Team 2',
        team1Score: match.t1s || match.team1Score || 'Yet to bat',
        team2Score: match.t2s || match.team2Score || 'Yet to bat'
      };
    });
  } catch (error) {
    console.error("Error fetching live matches from cricketdata.org:", error);
    return [];
  }
};
