<template>
  <header class="p-3 text-bg-dark">
    <div>
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link to="/" class="nav-link px-2 text-white">
              Ứng dụng Quản lý danh bạ
            </router-link>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-secondary">
              Danh bạ
              <i class="fa-solid fa-address-book"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <router-view></router-view>
</template>
