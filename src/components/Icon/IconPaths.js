import React from 'react';

const errorAlert = {
  viewBox: '0 0 30 30',
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z" stroke="#A62B31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.1998 10.8L10.7998 19.2" stroke="#A62B31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.7998 10.8L19.1998 19.2" stroke="#A62B31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const infoAlert = {
  viewBox: '0 0 30 30',
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.9998 20.6V15" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.0001 9.39995H15.0141" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const successAlert = {
  viewBox: '0 0 30 31',
  path: (
    <>
      <path d="M29.0001 14.1121V15.4001C28.9965 21.6002 24.9153 27.0596 18.9696 28.8175C13.0239 30.5755 6.63003 28.2133 3.25542 23.012C-0.119198 17.8106 0.329288 11.0092 4.35766 6.29599C8.38604 1.58279 15.0347 0.0806215 20.6981 2.60409" stroke="#256830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.9998 4.19995L14.9998 18.214L10.7998 14.014" stroke="#256830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const warningAlert = {
  viewBox: '0 0 30 26',
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8238 2.36716L2.04375 20.3635C1.59148 21.1468 1.58878 22.1112 2.03666 22.8969C2.48454 23.6827 3.31573 24.1718 4.22012 24.1817H25.7801C26.6845 24.1718 27.5157 23.6827 27.9636 22.8969C28.4115 22.1112 28.4088 21.1468 27.9565 20.3635L17.1765 2.36716C16.715 1.60642 15.8899 1.14185 15.0001 1.14185C14.1104 1.14185 13.2852 1.60642 12.8238 2.36716Z" stroke="#FFD15F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.0001 8.90918V14.0001" stroke="#FFD15F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.0001 19.091H15.0128" stroke="#FFD15F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const fileDragDrop = {
  viewBox: '0 0 38 47',
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M23.5 1H5.5C3.01472 1 1 3.01472 1 5.5V41.5C1 43.9853 3.01472 46 5.5 46H32.5C34.9853 46 37 43.9853 37 41.5V14.5L23.5 1Z" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 1V14H37" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 37V24" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 31H26" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const formErrorAlert = {
  viewBox: '0 0 18 18',
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#A62B31" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.99961 5.7998V8.9998" stroke="#A62B31" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.99952 12.1998H9.00752" stroke="#A62B31" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const opacityUploadFile = {
  viewBox: '0 0 22 27',
  path: (
    <g opacity="0.5">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5 1H3.5C2.11929 1 1 2.08394 1 3.42105V22.7895C1 24.1266 2.11929 25.2105 3.5 25.2105H18.5C19.8807 25.2105 21 24.1266 21 22.7895V8.26316L13.5 1Z" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.6318 1V8.36842H21.0003" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.789 14.1582H6.2627" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.789 19.4208H6.2627" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.36883 9.94721H6.78988H5.21094" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
};

const uploadFile = {
  viewBox: '0 0 22 27',
  path: (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5 1H3.5C2.11929 1 1 2.08394 1 3.42105V22.7895C1 24.1266 2.11929 25.2105 3.5 25.2105H18.5C19.8807 25.2105 21 24.1266 21 22.7895V8.26316L13.5 1Z" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.6318 1V8.36842H21.0003" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.789 14.1582H6.2627" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.789 19.4208H6.2627" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.36883 9.94721H6.78988H5.21094" stroke="#155DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export {
  errorAlert,
  infoAlert,
  successAlert,
  warningAlert,
  fileDragDrop,
  formErrorAlert,
  opacityUploadFile,
  uploadFile,
};
