/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */

import React from 'react';

interface Props {
  children?: React.ReactNode;
  title?: string;
  style?: any;
}

export const DarkModeSection: React.FC<Props> = ({
  children,
  title,
  style,
}) => {
  return (
    <div data-mode="dark" style={style} className="darkholder">
      <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>
        {title || 'Dark Mode'}
      </h4>
      {children}
    </div>
  );
};
