import Head from "next/head"
import { NextStudio } from "next-sanity/studio"
import { NextStudioHead } from "next-sanity/studio/head"
import { useEffect, useState } from "react"

import _config from "../../sanity.config"

export default function IndexPage() {
    const [config, setConfig] = useState(_config)

    useEffect(
      // Start fetching the theme in parallel with the Studio auth loading
      () =>
        // The webpackIgnore tells webpack to not attempt bundling this dynamic import,
        // and instead let it run natively in the browser at runtime
        void import(
          /* webpackIgnore: true */ "https://themer.sanity.build/api/hues?preset=retro-colonial&default=bf7d81;400&primary=c0888a;400&transparent=a41c23;400"
        ).then(({ theme }) => setConfig((config) => ({ ...config, theme }))),
      []
    );

    return <NextStudio config={config} />
}
