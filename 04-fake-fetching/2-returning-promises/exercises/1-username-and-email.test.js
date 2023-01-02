import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---



/**
 *
 */
const usernameAndEmail = (id=1) => {
  const userPromise = fetchUserById(id);
  const readName = (user) => {
    log('fetching user ' + id);
    log(`user ${id}:`, user);
    return user.id + '.' + ' ' + user.username + ', ' + user.email;
   
  };
  const namePromise = userPromise.then(readName);
 return namePromise;
};

// --- test function ---

describe("usernameAndEmail: returns a user's name", () => {
  it("gets user 2's name", async () => {
    const actual = await usernameAndEmail(2);
    expect(actual).toEqual('2. Antonette, Shanna@melissa.tv'); // email has been corrected 
  });
  it("gets user 3's name", async () => {
    const actual = await usernameAndEmail(4);
    expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org'); // email has been corrected 
  });
  it("gets user 4's name", async () => {
    const actual = await usernameAndEmail(7);
    expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
  });
  it("gets user 8's name", async () => {
    const actual = await usernameAndEmail(10);
    expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz'); // email has been corrected 
  });
});

log('= = = =  the call stack is empty  = = = =');