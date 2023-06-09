export * from './account';
export * from './blockhash';
export * from './bpf-loader-deprecated';
export * from './bpf-loader';
export * from './connection';
export * from './epoch-schedule';
export * from './errors';
export * from './fee-calculator';
export * from './keypair';
export * from './loader';
export * from './message';
export * from './nonce-account';
export * from './programs';
export * from './publickey';
export * from './transaction';
export * from './validator-info';
export * from './vote-account';
export * from './sysvar';
export * from './utils';

/**
 * There are 1-billion lamports in one SOL
 */
export const LAMPORTS_PER_SOL = 1000000000;

// m17: SLRT, QTH, MIRA, MLN
/**
 * There are 1-billion lamports in one SLRT
 */
export const LAMPORTS_PER_SLRT = 1000000000;
/**
 * There are 1-billion lamports in one QTH
 */
export const LAMPORTS_PER_QTH = 1000000000;
/**
 * There are 1-billion lamports in one MIRA
 */
export const LAMPORTS_PER_MIRA = 1000000000;
/**
 * There are 1-billion lamports in one MLN
 */
export const LAMPORTS_PER_MLN = 1000000000;
