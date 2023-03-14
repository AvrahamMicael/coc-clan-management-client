export type RequiredProperties<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type Role = 'member'|'admin'|'coLeader'|'leader';

export type League = { id: number, name: string, iconUrls: { small: string, tiny: string, medium?: string } };

export type PlayerHousePart = {
  type: 'roof'|'ground'|'walls'|'decoration',
  id: number,
};

export type Village = 'home'|'builderBase';

export type PlayerHouse = { elements: [PlayerHousePart, PlayerHousePart, PlayerHousePart, PlayerHousePart] };

export type PlayerLabel = {
  id: number,
  name: string,
  iconUrls: { small: string, medium: string },
};

/** Troops, heroes and spells. */
export type Army = {
  name: string,
  level: number,
  maxLevel: number,
  village: Village,
};

export type Achievement = {
  name: string,
  stars: number,
  value: number,
  target: number,
  info: string,
  completionInfo: string | null,
  village: Village,
};

/** Clan data which comes along with one player request. */
export type PlayerClan = {
  tag: string,
  name: string,
  clanLevel: number,
  badgeUrls: { small: string, large: string, medium: string },
};

export type ClanMember = {
  tag: string,
  name: string,
  role: Role,
  expLevel: number,
  league: League,
  trophies: number,
  versusTrophies: number,
  clanRank: number,
  previousClanRank: number,
  donations: number,
  donationsReceived: number,
  playerHouse: PlayerHouse,
};

export type Player = {
  tag: string,
  name: string,
  townHallLevel: number,
  expLevel: number,
  trophies: number,
  bestTrophies: number,
  warStars: number,
  attackWins: number,
  defenseWins: number,
  builderHallLevel: number,
  versusTrophies: number,
  bestVersusTrophies: number,
  versusBattleWins: number,
  warPreference: number,
  donations: number,
  donationsReceived: number,
  clanCapitalContributions: number,
  achievements: Achievement[],
  versusBattleWinCount: number,
  labels: PlayerLabel[],
  troops: Army[],
  heroes: Army[],
  spells: Army[],
  playerHouse?: PlayerHouse,
  role?: Role,
  league?: League,
  clan?: PlayerClan,
};

/** Data that is got when fetching only one member */
export type MemberOnly = RequiredProperties<Player, 'clan'>;

export type RaidMember = {
  tag: string,
  name: string,
  attacks: number,
  attackLimit: number,
  bonusAttackLimit: 0 | 1,
  capitalResourcesLooted: number,
};

export type ExtraData = {
  tag: number,
  wars: number,
  war_leagues: number,
  games_points: number,
};

export type PromotionRequirement = {
  /** role */
  r: string,
  /** available */
  a: boolean,
  /** wars */
  w: number,
  /** war_leagues */
  wl: number,
  /** donations */
  d: number,
  /** raid_attacks */
  ra: number,
  /** clan_games_points */
  p: number,
};

export type ResumedExtraData = {
  wars: number,
  war_leagues: number,
  games_points: number,
  lastRaid: RaidData,
};

export type MemberWithAllData = ClanMember & ResumedExtraData;

export type MemberOnlyWithAllData = MemberOnly & ResumedExtraData;

export type RaidData = { attacks: number, attackLimit: number };

export type MemberAvailableToPromotion = MemberWithAllData & {
  roleToPromote: string,
};
