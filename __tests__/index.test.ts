import capitalize from '@hashicorp/platform-util/text/capitalize'

describe('capitalize', () => {
  it('works', () => {
    expect(capitalize('test')).toEqual('Test')
  })
})
