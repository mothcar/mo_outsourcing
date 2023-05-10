function setShortName(originName) {
    let newName
    switch(originName){
        case '서울특별시':
            newName = '서울'
            break;
        case '인천광역시':
            newName = '인천'
            break;
        case '부산광역시':
            newName = '부산'
            break;
        case '대구광역시':
            newName = '대구'
            break;
        case '대전광역시':
            newName = '대전'
            break;
        case '광주광역시':
            newName = '광주'
            break;
        case '세종특별자치시':
            newName = '세종'
            break;
        case '경기도':
            newName = '경기'
            break;
        case '강원도':
            newName = '강원'
            break;
        case '제주특별자치도':
            newName = '제주'
            break;
        case '충청북도':
            newName = '충북'
            break;
        case '충청남도':
            newName = '충남'
            break;
        case '전라북도':
            newName = '전북'
            break;
        case '전라남도':
            newName = '전남'
            break;
        case '경상북도':
            newName = '경북'
            break;
        case '경상남도':
            newName = '경남'
            break;
    }

    return newName
}

function setLongName(shortName) {
    let newName
    switch(shortName){
        case '서울':
            newName = '서울특별시'
            break;
        case '인천':
            newName = '인천광역시'
            break;
        case '부산':
            newName = '부산광역시'
            break;
        case '대구':
            newName = '대구광역시'
            break;
        case '대전':
            newName = '대전광역시'
            break;
        case '광주':
            newName = '광주광역시'
            break;
        case '세종':
            newName = '세종특별자치시'
            break;
        case '경기':
            newName = '경기도'
            break;
        case '강원':
            newName = '강원도'
            break;
        case '제주':
            newName = '제주특별자치도'
            break;
        case '충북':
            newName = '충청북도'
            break;
        case '충남':
            newName = '충청남도'
            break;
        case '전북':
            newName = '전라북도'
            break;
        case '전남':
            newName = '전라남도'
            break;
        case '경북':
            newName = '경상북도'
            break;
        case '경남':
            newName = '경상남도'
            break;
    }

    return newName
}

export {setShortName, setLongName}