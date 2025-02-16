const createDomain = async (domainName) => {
    cd(`src/domains`);
    await $`mkdir ${domainName}`;

    // 도메인 찾아주는 비동기 함수
    await Promise.all([
        $`touch ${domainName}/api.js`,
        $`touch ${domainName}/event.js`,
        $`touch ${domainName}/index.js`,
        $`touch ${domainName}/request.js`,
        $`touch ${domainName}/schema.js`,
        $`touch ${domainName}/service.js`
    ]);
};

// 도메인 생성
const main = async () => {
    console.log("도메인을 입력하세요: ");

    const domainName = await $`read domainName && echo $domainName`;
    console.log(`도메인을 생성하였습니다. ${domainName}`);

    await createDomain(domainName);
};

main();