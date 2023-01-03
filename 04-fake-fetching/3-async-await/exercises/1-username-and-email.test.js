import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 *
 * @async
 */
const usernameAndEmail = async (id=1) => {
  log('fetching user ' + id);
  const userPromise = fetchUserById(id);

  const readName = (user) => {
    log(`user ${id}`, user);
    const userId = user.id;
    const userName = user.username;
    const userEmail = user.email;
    const info1 = [userId+'.'];
    const info2 = [userName+','];
    const info3 = [userEmail];
    const info = info1.concat(info2,info3);
    return info.join(' ');
}

const namePromise = userPromise.then(readName);
return namePromise;
}

describe("usernameAndEmail returns the user's id, name and email", () => {
  it("returns user 2's info", async () => {
    const actual = await usernameAndEmail(2);
    expect(actual).toEqual('2. Antonette, Shanna@melissa.tv');
  });
  it("returns user 4's info", async () => {
    const actual = await usernameAndEmail(4);
    expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org');
  });
  it("returns user 7's info", async () => {
    const actual = await usernameAndEmail(7);
    expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
  });
  it("returns user 10's info", async () => {
    const actual = await usernameAndEmail(10);
    expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz');
  });
});

log('= = = =  the call stack is empty  = = = =');
