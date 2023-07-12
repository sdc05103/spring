import React, { useState, useRef, useCallback } from 'react';
import CategoryButton from './CategoryButton';
import MainCategory from './MainCategory';
import ModifyBar from './ModifyBar';
import Top from './Top';

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const CreditsTemplate = () => {
    const [subjects, setSubjects] = useState([
        {
            id: 1,
            subject: '국어',
            class: '',
            credit: 1,
        },
        {
            id: 2,
            subject: '수학',
            class: '',
            credit: 1,
        },
        {
            id: 3,
            subject: '영어',
            class: '',
            credit: 1,
        },
    ]);

    const nextId = useRef(4);

    const onModifySubject = useCallback((e, id) => {
        setSubjects(
            subjects.map(subject => (subject.id === id) ? { ...subject, subject: e.value } : subject)
        );
        console.log(e);
    });

    const onModifyClass = useCallback((e, id) => {
        setSubjects(
            subjects.map(subject => (subject.id === id) ? { ...subject, class: e.value } : subject)
        );
        console.log(id);
    });

    const onModifyCredit = useCallback((e, id) => {
        setSubjects(
            subjects.map(subject => (subject.id === id) ? { ...subject, credit: e.value } : subject)
        );
        console.log(e);
    });

    const onAddClass = useCallback(() => {
        const newClass = {
            id: nextId.current,
            subject:'국어',
            class: '',
            credit: 1,
        };
        setSubjects(subjects.concat(newClass));
        nextId.current += 1;
        console.log(subjects);
    }, [subjects]);

    console.log(subjects);

    return (
        <div style={desktop}>
            <Top />
            <CategoryButton />
            <MainCategory subjects={subjects} onModifySubject={onModifySubject} onModifyClass={onModifyClass} onModifyCredit={onModifyCredit} />
            <ModifyBar onAddClass={onAddClass} />
        </div>
    );
};

export default CreditsTemplate;