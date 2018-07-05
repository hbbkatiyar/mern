export default [
    { label: "Title", name: "title", type: "text", noValueError: "Provide entity title" },
    { label: "Size", name: "size", type: "text", noValueError: "Provide entity size" },
    { label: "Unit", name: "unit", type: "select", noValueError: "Provide entity unit", options : [{ value: 1, title: 'Beegha' }, { value: 2, title: 'Acer' }, { value: 3, title: 'Hectare' }] },
    { label: "Type", name: "type", type: "select", noValueError: "Provide entity type", options: [{ value: 1, title: 'Own' }, { value: 2, title: 'Rented' }] },
    { label: "Sub Type", name: "subtype", type: "select", noValueError: "Provide entity sub type", options: [{ value: 1, title: 'Solo' }, { value: 2, title: 'Partnership' }] },
    { label: "Person Involved", name: "person_involved", type: "text", noValueError: "Provide no. of persons involved"},
    { label: "Amount", name: "amount", type: "text", noValueError: "Provide entity amount"}
];