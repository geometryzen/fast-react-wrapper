export {
    FoundationElementRegistryElement,
    provideReactWrapper,
    ReactEventMap,
    ReactEvents,
    ReactWrapper,
    ReactWrapperConfig,
    ReactWrapperProps
} from "@microsoft/fast-react-wrapper";
import {
    fastButton, fastCard, provideFASTDesignSystem
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const FastCard = wrap(fastCard());
export const FastButton = wrap(fastButton());