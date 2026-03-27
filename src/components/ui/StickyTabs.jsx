'use client';

import React, { Children, isValidElement } from 'react';

const StickyTabItem = () => {
    return null;
};

const StickyTabs = ({
    children,
    mainNavHeight = '5rem',
}) => {
    const stickyTopValue = `calc(${mainNavHeight} - 1px)`;

    return (
        <div style={{ overflowX: 'clip' }}>
            {/* Spacer for main nav */}
            <div
                style={{
                    height: mainNavHeight,
                    position: 'sticky',
                    left: 0,
                    top: 0,
                    zIndex: 20,
                    width: '100%',
                    background: '#ffffff',
                }}
                aria-hidden="true"
            />

            {Children.map(children, (child) => {
                if (!isValidElement(child) || child.type !== StickyTabItem) {
                    return null;
                }

                const { title, id, children: itemContent } = child.props;

                return (
                    <section
                        key={id}
                        style={{
                            position: 'relative',
                            overflow: 'clip',
                            background: '#ffffff',
                        }}
                    >
                        {/* Sticky category header */}
                        <div
                            style={{
                                position: 'sticky',
                                top: stickyTopValue,
                                zIndex: 10,
                                marginTop: '-1px',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            }}
                        >
                            <div
                                style={{
                                    background: '#8E0935',
                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: '1400px',
                                        margin: '0 auto',
                                        padding: '20px 24px',
                                    }}
                                >
                                    <h2
                                        style={{
                                            margin: 0,
                                            fontFamily: 'var(--font-inter)',
                                            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                            fontWeight: 900,
                                            lineHeight: 1,
                                            color: '#ffffff',
                                        }}
                                    >
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div
                            style={{
                                maxWidth: '1400px',
                                margin: '0 auto',
                                padding: '16px 24px 32px',
                            }}
                        >
                            {itemContent}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

StickyTabs.Item = StickyTabItem;
export default StickyTabs;
