const findTheOldest = function(people) {
    let oldest = people.reduce((old,peep)=> {
        if (old == {}) return old=peep;
        let oldAge = (old.yearOfDeath||new Date().getFullYear())-old.yearOfBirth;
        let peepAge = (peep.yearOfDeath||new Date().getFullYear())-peep.yearOfBirth;
        console.log(oldAge,peepAge)
        return oldAge > peepAge ? old : peep
    });
    return oldest

};

module.exports = findTheOldest;
