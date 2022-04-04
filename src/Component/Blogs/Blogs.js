import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='px-3 mt-3'>
                <h1 className='text-decoration-underline'>
                    What Is ContextApi?
                </h1>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease.
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children.
                </p>
                <h1 className='text-decoration-underline'>
                    What Is SemanticTag?
                </h1>
                <p>
                Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph.The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Although nearly every HTML4 tag and all the HTML5 tags have semantic meanings, some tags are primarily semantic.
                   
                </p>
                <h1 className='text-decoration-underline'>
                    The Defference Between Inline,Inline-Block,Block Element!!
                </h1>
                <p>
                    <h2>Display Inline</h2>
                      <small>Display Inline Here the width, height not respected and the element goes to side by side</small>
                </p>
                <p>
                    <h2>Display Inline-Block</h2>
                      <small>Display Inline Here the width, height padding are respected, and aslo  the element goes to side by side</small>
                </p>
                <p>
                    <h2>Display Block</h2>
                      <small>Display Block Here again everything is respected, but the elements donot sit side by side.</small>
                </p>
            </div>
        </div>
    );
};

export default Blogs;