// Live Score Integration using CricAPI

const API_KEY = '1e768420-7aa3-46d2-951b-3ac2eadc1711';
const BASE_URL = 'https://api.cricapi.com/v1';

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
    const response = await fetch(`${BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`);
    
    const json = await response.json();

    if (json.status !== "success") {
      console.warn("API returned non-success status:", json);
      return [];
    }

    // Map the complex API response down to a simple UI-friendly model
    return json.data.map((match: any) => {
      // Find scores for each team if available
      let t1Score = "Yet to bat";
      let t2Score = "Yet to bat";

      if (match.score && Array.isArray(match.score)) {
        const team1Short = match.teams?.[0] || 'Team 1';
        const team2Short = match.teams?.[1] || 'Team 2';
        
        // CricAPI score objects usually look like { r: runs, w: wickets, o: overs, inning: string }
        // The inning string usually contains the team name
        const s1 = match.score.find((s: any) => s.inning.includes(team1Short));
        const s2 = match.score.find((s: any) => s.inning.includes(team2Short));

        if (s1) t1Score = `${s1.r}/${s1.w} (${s1.o})`;
        else if (match.score.length > 0) t1Score = `${match.score[0].r}/${match.score[0].w} (${match.score[0].o})`;

        if (s2) t2Score = `${s2.r}/${s2.w} (${s2.o})`;
        else if (match.score.length > 1) t2Score = `${match.score[1].r}/${match.score[1].w} (${match.score[1].o})`;
      }

      return {
        id: match.id,
        name: match.name,
        matchType: match.matchType,
        status: match.status,
        venue: match.venue || 'Unknown Venue',
        team1: match.teams?.[0] || 'Team 1',
        team2: match.teams?.[1] || 'Team 2',
        team1Score: t1Score,
        team2Score: t2Score
      };
    });
  } catch (error) {
    console.error("Error fetching live matches:", error);
    return [];
  }
};
