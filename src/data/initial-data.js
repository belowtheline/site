// Cells / candidate preferences
const initialCandidateData = {
    'dingo-party-bob-doggy': {
        given: 'Bob',
        surname: 'Doggy',
        id: 'dingo-party-bob-doggy',
        partyId: 'dpa',
        description: 'Some desc here blah',
        order: 1,
    },
    'dingo-party-frank-kangaroo': {
        given: 'Frank',
        surname: 'Kangaroo',
        id: 'dingo-party-frank-kangaroo',
        partyId: 'dpa',
        description: 'Some desc here blah',
        order: 2,
    },
    'akp-sue-koala': {
        given: 'Sue',
        surname: 'Koala',
        id: 'dingo-party-sue-koala',
        partyId: 'akp',
        description: 'Some desc here blah',
        order: 3,
    },
    'akp-marg-koala': {
        given: 'Marg',
        surname: 'Koala',
        id: 'dingo-party-marg-koala',
        partyId: 'akp',
        description: 'Some desc here blah',
        order: 4,
    },
    'akp-francois-budgie': {
        given: 'Francois',
        surname: 'Budgie',
        id: 'dingo-party-francois-budgie',
        partyId: 'akp',
        description: 'Some desc here blah',
        order: 5,
    },
}

// Columns
const initialPartyData = {
    akp: {
        name: 'Australian Koala Party',
        candidates: ['akp-francois-budgie', 'akp-marg-koala', 'akp-sue-koala'],
    },
    dpa: {
        name: 'The dingo party of Australia',
        candidates: ['dingo-party-bob-doggy', 'dingo-party-frank-kangaroo'],
    },
}

const initialOrderData = [
    'dingo-party-bob-doggy',
    'dingo-party-frank-kangaroo',
    'akp-sue-koala',
    'akp-francois-budgie',
    'akp-marg-koala',
]

export { initialOrderData, initialCandidateData, initialPartyData }
