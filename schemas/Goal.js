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
        },
        {
            name: "isCompleted",
            title: "Is completed?",
            type: "boolean",
        },
        {
            name: "completedOn",
            title: "Completed On",
            type: "datetime",
        },
        {
            name: "map",
            title: "Map for this goal",
            type: "reference",
            to:[{type: "map"}]
        }
    ],
}