// Mock service to replace the YouTube Data API until keys are provided

export interface VideoData {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
}

export const getTrendingClips = async (): Promise<VideoData[]> => {
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', title: 'Virat Kohli aggressive 100 vs RCB Highlights', views: '1.2M views', thumbnail: 'mock' },
        { id: '2', title: 'MS Dhoni Helicopter Shots Compilation', views: '3.4M views', thumbnail: 'mock' },
        { id: '3', title: 'Jasprit Bumrah 5 Wickets vs KKR', views: '800K views', thumbnail: 'mock' },
        { id: '4', title: 'SKY 360 Degree Shots HD', views: '2.1M views', thumbnail: 'mock' }
      ]);
    }, 500);
  });
};
