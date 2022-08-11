<template>
  <div class="article">
    <div class="header">
      <div class="header-title">CowBoy Bebop</div>
    </div>

    <router-view />

    <div class="cool-navigator">
      <nav>
        <ul>
          <li class="welcome">
            <a href="/"><span>welcome</span></a>
          </li>
          <li class="mypage">
            <a href="/mypage"><span>mypage</span></a>
          </li>
          <li class="video">
            <a href="/video"><span>video</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
