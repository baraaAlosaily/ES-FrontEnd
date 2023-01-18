import Button from "../components/Button";

export const columns = [
    {
        title: 'Log Id',
        dataIndex: 'logId',
        key: 'logId',
        sorter: (a,b) => a.logId-b.logId,
        defaultSortOrder: 'descend',
        render: (text, record) => (
            <p className="Poppins">
                {record.logId?record.logId:'-/-'}
            </p>
        ),
    },
    {
        title: 'Application Type',
        dataIndex: 'applicationType',
        key: 'applicationType',
        sorter: (a,b) => a.applicationType-b.applicationType,
        render: (text, record) => (
            <p className="Poppins">
                {record.applicationType?record.applicationType:'-/-'}
            </p>
        ),
    },
{
        title: 'Application Id',
        dataIndex: 'applicationId',
        sorter: (a,b) => a.applicationId-b.applicationId,
        key: 'applicationId',
        render: (text, record) => (
            <p className="Poppins">
                {record.applicationId?record.applicationId:'-/-'}
            </p>
        ),
    },
    {
        title: 'Action Type',
        dataIndex: 'actionType',
        sorter: (a,b) => a.actionType-b.actionType,
        key: 'actionType',
        render: (text, record) => (
            <p className="Poppins">
                {record.actionType?record.actionType:'-/-'}
            </p>
        ),
    },
    {
        title: 'Date : Time',
        dataIndex: 'creationTimestamp',
        key: 'creationTimestamp',
        defaultSortOrder: 'descend',
        sorter: (a, b) => new Date(a.creationTimestamp) - new Date(b.creationTimestamp),
        render: (text, record) => (
            <p className="Poppins">
                {record.creationTimestamp?record.creationTimestamp:'-/-'}
            </p>
        ),
    }
];
