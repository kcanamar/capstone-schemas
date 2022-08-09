export default {
    name: 'goal',
    type: 'document',
    title: 'Goal',
    fields: [
        {
            title: 'Goal Name',
            type: 'string',
            name: 'title',
        },
        {
            title: 'Celebration',
            name: 'celebration',
            type: 'string',
        },
        {
            title: 'Tactic',
            name: 'tactic',
            type: 'string',
        },
        {
            title: 'Benchmark',
            name: 'benchmark',
            type: 'string',
        },
        {
            title: 'Team',
            name: 'team',
            description: 'Are you working on this goal with anyone else?',
            type: 'array',
            of: [{type: 'string'}],
        }
    ],
}