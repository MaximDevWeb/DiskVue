<script setup lang="ts"></script>

<template>
  <main class="main">
    <ul class="breadcrumbs">
      <li>
        <a href="#">All Files</a>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#right_arrow"></use>
        </svg>
      </li>
      <li>Personal Stuff</li>
    </ul>

    <div class="folders">
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />
          <div class="folder-item__title">
            Downloads
            <span>20 Files</span>
          </div>
          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            24GB
          </div>
        </div>
      </a>
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />

          <div class="folder-item__title">
            Photos
            <span>20 Files</span>
          </div>

          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>

            <div class="context">
              <div class="context__item">Delete</div>
              <div class="context__item">Rename</div>
            </div>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            19GB
          </div>
        </div>
      </a>
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />
          <div class="folder-item__title">
            Portfolio
            <span>20 Files</span>
          </div>
          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            8GB
          </div>
        </div>
      </a>
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />
          <div class="folder-item__title">
            Portfolio
            <span>20 Files</span>
          </div>
          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            8GB
          </div>
        </div>
      </a>
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />
          <div class="folder-item__title">
            Portfolio
            <span>20 Files</span>
          </div>
          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            8GB
          </div>
        </div>
      </a>
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />
          <div class="folder-item__title">
            Portfolio
            <span>20 Files</span>
          </div>
          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            8GB
          </div>
        </div>
      </a>
      <a href="#" class="folder-item">
        <div class="folder-item__header">
          <img
            src="/images/files/folder.svg"
            alt="Folder image"
            class="folder-item__image"
          />
          <div class="folder-item__title">
            Portfolio
            <span>20 Files</span>
          </div>
          <div class="folder-item__option">
            <svg class="icon">
              <use xlink:href="#menu_dotes"></use>
            </svg>
          </div>
        </div>

        <div class="folder-item__bottom">
          <div class="folder-item__size">
            <span>Folder size</span>
            8GB
          </div>
        </div>
      </a>
    </div>

    <div class="files">
      <div class="files__header">
        <div class="select">
          <select class="select">
            <option value="">All files</option>
            <option value="images">Images</option>
            <option value="documents">Documents</option>
            <option value="archives">Archives</option>
            <option value="designs">Designs</option>
          </select>
          <svg class="icon">
            <use xlink:href="#down_arrow"></use>
          </svg>
        </div>

        <div class="radio-switch">
          <div class="radio-switch__item">
            <input
              id="style_list"
              type="radio"
              name="style"
              value="list"
              checked
            />
            <label for="style_list">
              <svg class="icon">
                <use xlink:href="#list"></use>
              </svg>
            </label>
          </div>
          <div class="radio-switch__item">
            <input id="style_grid" type="radio" name="style" value="grid" />
            <label for="style_grid">
              <svg class="icon">
                <use xlink:href="#grid"></use>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div class="files__list">
        <div class="file">
          <img class="file__icon" src="/images/files/doc.svg" />
          <div class="file__name">Lorem ipsum dolor sit.doc</div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">250.4MB</div>
          <div class="file__link"></div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/pdf.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur.pdf
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">10.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>

        <div class="file">
          <img class="file__icon" src="/images/files/zip.svg" />
          <div class="file__name">
            Lorem ipsum dolor sit amet, consectetur adipisicing.zip
          </div>
          <div class="file__date">12.10.2022</div>
          <div class="file__size">50.4MB</div>
          <div class="file__link">
            <svg class="icon">
              <use xlink:href="#link"></use>
            </svg>
          </div>
        </div>
      </div>

      <div class="uploader">
        <div class="uploader__header">
          <p>Upload files</p>

          <div>
            <a href="#">
              <svg class="icon icon__min">
                <use xlink:href="#down_angle"></use>
              </svg>
            </a>

            <a href="#">
              <svg class="icon">
                <use xlink:href="#close"></use>
              </svg>
            </a>
          </div>
        </div>

        <div class="uploader__list">
          <div class="uploader__item">
            <img
              class="uploader__icon"
              src="/images/files/pdf.svg"
              alt="upload file"
            />
            <div class="uploader__name">
              Lorem ipsum.pdf

              <div class="timeline">
                <div class="timeline__path"></div>
                <div class="timeline__line" style="width: 80%"></div>
              </div>
            </div>
            <a href="#" class="uploader__option">
              <svg class="icon">
                <use xlink:href="#close"></use>
              </svg>
            </a>
          </div>

          <div class="uploader__item">
            <img
              class="uploader__icon"
              src="/images/files/ai.svg"
              alt="upload file"
            />
            <div class="uploader__name">
              Lorem ipsum.ai

              <div class="timeline">
                <div class="timeline__path"></div>
                <div class="timeline__line" style="width: 100%"></div>
              </div>
            </div>
            <div class="uploader__option">
              <svg class="icon">
                <use xlink:href="#success"></use>
              </svg>
            </div>
          </div>

          <div class="uploader__item">
            <img
              class="uploader__icon"
              src="/images/files/txt.svg"
              alt="upload file"
            />
            <div class="uploader__name">
              Lorem ipsum.txt

              <div class="timeline">
                <div class="timeline__path"></div>
                <div class="timeline__line" style="width: 30%"></div>
              </div>
            </div>
            <a href="#" class="uploader__option">
              <svg class="icon">
                <use xlink:href="#close"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="footer__name">
          Lorem ipsum dolor sit amet, consectetur.pdf
        </div>

        <div class="footer__button">
          <a href="#" class="btn btn_sm">
            <svg class="icon">
              <use xlink:href="#download"></use>
            </svg>
            Download
          </a>
          <a href="#" class="btn btn_sm">
            <svg class="icon">
              <use xlink:href="#upload"></use>
            </svg>
            Share
          </a>
        </div>

        <div class="footer__option">
          <a href="#">
            <svg class="icon">
              <use xlink:href="#edit"></use>
            </svg>
            Rename
          </a>

          <a href="#">
            <svg class="icon">
              <use xlink:href="#delete"></use>
            </svg>
            Delete
          </a>

          <a href="#">
            <svg class="icon">
              <use xlink:href="#unlink"></use>
            </svg>
            Удалить ссылку
          </a>

          <a href="#" class="footer__close">
            <svg class="icon">
              <use xlink:href="#close"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
