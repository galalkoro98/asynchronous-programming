import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

/**
 *
 */
const userWorksAt = (id = 1, nameOfCompany) => {
  log('fetching user ' + id);
  const userPromise = fetchUserById(id);

  const readName = (user) => {
    log(`user ${id}`, user);
  
  
    if(user.company.name === nameOfCompany){
      return true;
    }
    else{
      return false;
    }

}


const namePromise = userPromise.then(readName);
return namePromise;


};

// --- test function ---

describe('userWorksAt checks if a user works at a specific company', () => {
  it('user 4 does work at Robel-Corkery', async () => {
    const actual = await userWorksAt(4, 'Robel-Corkery');
    expect(actual).toEqual(true);
  });
  it('user 4 does not work at Romaguera-Jacobson', async () => {
    const actual = await userWorksAt(4, 'Romaguera-Jacobson');
    expect(actual).toEqual(false);
  });
  it('user 6 does work at Considine-Lockman', async () => {
    const actual = await userWorksAt(6, 'Considine-Lockman');
    expect(actual).toEqual(true); // Correct value is true not false
  });
  it('user 7 does not work at John Groups', async () => {
    const actual = await userWorksAt(7, 'John Groups');
    expect(actual).toEqual(false);
  });
});

log('= = = =  the call stack is empty  = = = =');