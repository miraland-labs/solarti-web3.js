import {expect} from 'chai';

import {clusterApiUrl} from '../src/utils/cluster';

describe('Cluster Util', () => {
  it('invalid', () => {
    expect(() => {
      clusterApiUrl('abc123' as any);
    }).to.throw();
  });

  it('devnet', () => {
    expect(clusterApiUrl()).to.eq('https://api.mainnet-mln.miraland.top');
    expect(clusterApiUrl('devnet')).to.eq('https://api.devnet-mln.miraland.top');
    expect(clusterApiUrl('devnet', true)).to.eq(
      'https://api.devnet-mln.miraland.top',
    );
    expect(clusterApiUrl('devnet', false)).to.eq(
      'http://api.devnet-mln.miraland.top',
    );
  });
});
