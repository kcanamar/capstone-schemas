export default {
    name: 'map',
    type: 'document',
    title: 'Map',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Map Name',
        },
        {
            name: 'start',
            type: 'datetime',
            title: 'Start Date',
        },
        {
            name: 'end',
            type: 'datetime',
            title: 'End Date',
        },
        {
            name: 'user',
            type: 'string',
            title: 'Users Email',
        },
        {
            name: 'goals',
            type: 'array',
            title: 'Goals',
            of: [{
                type: 'reference',
                to: [
                    {type: 'goal'}
                ],
            }],
            options: {
                layout: 'goals'
            },
        },
    ],
}