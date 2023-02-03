function typeOf(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

export function typeError(message){
  throw new TypeError( message );
}

export const isString = data => typeOf(data) === 'string';

export function getNode(node){
  if(!isString(node)){
    typeError('getNode 함수의 인자는 문자 타입 이여야 합니다.');
  }

  // if(!isString(node)) typeError('에러가 발생했습니다.');
  
  return document.querySelector(node)
}

export function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  }
  node.insertAdjacentHTML('beforeend', text);
}

export const renderFooter = (target) =>{
  insertLast(target,createFooter())
}

export function createFooter() {
  return /* html */`
  <footer class="footer">
  <div class="footer__inner">
    <div class="footer__inner-top">
      <div class="footer__customer-service">
        <h2 class="footer__customer-service-title">고객행복센터</h2>
        <div class="footer__customer-service-info">
          <p class="footer__customer-service-number">1644-1107</p>
          <p class="footer__customer-service-time">
            월~토요일 오전 7시 - 오후 6시
          </p>
        </div>
        <ul class="footer__inquiry-list">
          <li class="footer__inquiry-item">
            <a class="footer__inquiry-item-button" href="#"
              >카카오톡 문의</a
            >
            <div>
              <p>
                <span>월~토요일</span>
                <span class="divider" aria-hidden="true">|</span>
                <span>오전 7시 - 오후 6시</span>
              </p>
              <p>
                <span>일/공휴일</span>
                <span class="divider" aria-hidden="true">|</span>
                <span>오전 7시 - 오후 1시</span>
              </p>
            </div>
          </li>
          <li class="footer__inquiry-item">
            <a class="footer__inquiry-item-button" href="#">1:1 문의</a>
            <div>
              <p>
                <span>365일</span>
              </p>
              <p>
                <span
                  >고객센터 운영시간에 순차적으로 답변드리겠습니다.</span
                >
              </p>
            </div>
          </li>
          <li class="footer__inquiry-item">
            <a class="footer__inquiry-item-button" href="#"
              >대량주문 문의</a
            >
            <div>
              <p>
                <span>월~금요일</span>
                <span class="divider" aria-hidden="true">|</span>
                <span>오전 9시 - 오후 6시</span>
              </p>
              <p>
                <span>점심시간</span>
                <span class="divider" aria-hidden="true">|</span>
                <span>낮 12시 - 오후 1시</span>
              </p>
            </div>
          </li>
        </ul>
        <div class="footer__mail">
          <p>
            비회원 문의 :
            <a class="primary-color" href="mailto:help@karlycorp.com"
              >help@karlycorp.com</a
            >
          </p>
          <p>
            비회원 대량주문 문의 :
            <a class="primary-color" href="mailto:help@karlycorp.com"
              >help@karlycorp.com</a
            >
          </p>
        </div>
      </div>
      <div class="footer__about">
        <ul class="footer__navigation">
          <li><a href="#">칼리소개</a></li>
          <li><a href="#">칼리소개영상</a></li>
          <li><a href="#">인재채용</a></li>
          <li><a href="#">이용약관 </a></li>
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용안내</a></li>
        </ul>
        <address class="footer__address">
          <span>법인명(상호) : 주식회사 컬리</span>
          <span class="divider" aria-hidden="true">|</span>
          <span>사업자등록번호 : 261-81-23567</span>
          <span class="divider" aria-hidden="true">|</span>
          <a class="primary-color" href="#">사업자정보확인</a>
          <br />
          <span>통신판매업 : 제 2018-서울강남-01646 호</span>
          <span class="divider" aria-hidden="true">|</span>
          <span>개인정보보호책임자 : 이원준</span>
          <br />
          <span>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</span>
          <span class="divider" aria-hidden="true">|</span>
          <span>대표이사 : 김슬아</span>
          <br />
          <span>입점문의 : 입정문의하기</span>
          <span class="divider" aria-hidden="true">|</span>
          <span
            >제휴문의 :
            <a class="primary-color" href="mailto:business@karlycorp.com"
              >business@karlycorp.com</a
            ></span
          >
          <br />
          <span
            >채용 문의 :
            <a class="primary-color" href="mailto:recruit@karlycorp.com"
              >recruit@karlycorp.com</a
            ></span
          >
          <br />
          <span>팩스 : 070 - 7500 - 6098</span>
        </address>
        <div>
          <ul class="footer__sns-list">
            <li class="footer__sns-item">
              <a target="_blank" href="#"
                ><img
                  class="footer__sns-img"
                  src="/assets/footer/ic-blog.svg"
                  alt="컬리 네이버블로그 바로가기"
              /></a>
            </li>
            <li class="footer__sns-item">
              <a target="_blank" href="#"
                ><img
                  class="footer__sns-img"
                  src="/assets/footer/ic-face-book.svg"
                  alt="컬리 페이스북 바로가기"
              /></a>
            </li>
            <li class="footer__sns-item">
              <a target="_blank" href="#"
                ><img
                  class="footer__sns-img"
                  src="/assets/footer/ic-instagram.svg"
                  alt="컬리 인스타그램 바로가기"
              /></a>
            </li>
            <li class="footer__sns-item">
              <a target="_blank" href="#"
                ><img
                  class="footer__sns-img"
                  src="/assets/footer/ic-naver-post.svg"
                  alt="컬리 네이버포스트 바로가기"
              /></a>
            </li>
            <li class="footer__sns-item">
              <a target="_blank" href="#"
                ><img
                  class="footer__sns-img"
                  src="/assets/footer/ic-youtube.svg"
                  alt="컬리 유튜브 바로가기"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__inner-middle">
      <ul class="footer__certified-list">
        <li>
          <a href="#" target="_blank" class="footer__certified-item">
            <img
              class="footer__certified-img"
              src="./assets/footer/logo-isms.svg"
              alt="I.S.M.S 로고"
            />
            <p class="footer__certified-info">
              [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영
              <br />
              (심사받지 않은 물리적 인프라 제외)
              <br />
              [유효기간] 2022.01.19 ~ 2025.01.18
            </p>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="footer__certified-item">
            <img
              class="footer__certified-img"
              src="./assets/footer/logo-privacy.svg"
              alt="E.privacy plus 로고"
            />
            <p class="footer__certified-info">
              개인정보보호 우수 웹사이트<br />
              개인정보처리시스템 인증<br />
              (ePRIVACY PLUS)
            </p>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="footer__certified-item">
            <img
              class="footer__certified-img"
              src="./assets/footer/logo-tosspayments.svg"
              alt="payments 로고"
            />
            <p class="footer__certified-info">
              토스페이먼츠 구매안전(에스크로) 서비스를 <br />
              이용하실 수 있습니다.
            </p>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" class="footer__certified-item">
            <img
              class="footer__certified-img"
              src="./assets/footer/logo-woori-bank.svg"
              alt="우리은행 로고"
            />
            <p class="footer__certified-info">
              고객님이 현금으로 결제한 금액에 대해 우리은행과
              <br />채무지급보증 계약을 체결하여 안전거래를 보장하고
              <br />있습니다.
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <p>
      마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
      판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
    </p>
    <p>
      마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
      통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
      등 의무와 책임을 부담하지 않습니다.
    </p>
    <br />
    <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
  </div>
</footer>
  `
}
