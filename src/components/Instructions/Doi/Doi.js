import React from 'react';

import { configType } from '../../../lib/types';

import styles from '../Instructions.module.css';

import doi from './doi.png';

import InstructionsHeader from '../InstructionsHeader';

const Doi = ({ config }) => (
  <>
    <InstructionsHeader config={config} title="Digital Object Identifier (DOI)" />
    <div className={`container pt-3 pb-4 ${styles.instructions}`}>
      <div className="row">
        <div className="col">
          <h2>Registering and Referencing your data via DOI</h2>
          <p>
            If you have a DOI for your data, you can reference it easily in the treebank
            template repository&apos;s metadata. This will add a DOI link to the bottom of
            the repository&apos;s home page.
          </p>

          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid img-thumbnail mt-0"
              src={doi}
              alt="footer of Treebank Template showing DOI"
            />
          </a>

          <p>
            There are many ways to register DOIs. Your institution may provide this service
            or you can use an open access repository such as
            {' '}
            <a
              href="https://zenodo.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenodo
            </a>
            .
          </p>
          <p>
            We describe below the process for using Zenodo. The instructions should be
            similar for other services.
          </p>
          <ol>
            <li>
              <b>Reserve a DOI</b>
              <ol>
                <li>
                  Visit
                  {' '}
                  <a
                    href="https://zenodo.org/deposit/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zenodo
                  </a>
                  ,
                  login and create a
                  {' '}
                  <code>New Upload</code>
                  .
                </li>
                <li>
                  Click the
                  {' '}
                  <code>Reserve DOI</code>
                  {' '}
                  button in the
                  {' '}
                  <code>Basic information</code>
                  {' '}
                  section.
                </li>
              </ol>
            </li>
            <li>
              <b>Add the DOI to your treebank-template metadata</b>
              <ol>
                <li>
                  In a new tab or window, return to your GitHub repository
                  for your treebank-template.
                </li>
                <li>
                  Navigate to the
                  {' '}
                  <code>Code</code>
                  {' '}
                  tab.
                </li>
                <li>
                  Replace the value after the
                  {' '}
                  <code>doi</code>
                  {' '}
                  field with the URI for you
                  newly reserved DOI. (Make sure it is the full URI, e.g. starting with
                  {' '}
                  <code>
                    https://dx.doi.org/
                  </code>
                  .)
                </li>
                <li>Commit the change to the master branch.</li>
              </ol>
            </li>
            <li>
              <b>Update the version of your repository</b>
              <ol>
                <li>
                  Every time you publish a new set of your data you should
                  create a new versioned release of your repository. (For best practices
                  for versioning we recommend
                  {' '}
                  <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">SemVer</a>
                  .)
                </li>
                <li>Decide on your version.</li>
                <li>
                  Edit the
                  {' '}
                  <code>package.json</code>
                  {' '}
                  file in the root directory of your repository
                  and update the value of the
                  {' '}
                  <code>version</code>
                  {' '}
                  field.
                </li>
                <li>Commit the change to the master branch.</li>
              </ol>
            </li>
            <li>
              <b>Create a release</b>
              <ol>
                <li>
                  Navigate to the
                  {' '}
                  <code>Code</code>
                  {' '}
                  tab of your GitHub repository.
                </li>
                <li>
                  In the
                  {' '}
                  <code>Releases</code>
                  {' '}
                  section on the right hand of the page,
                  click on
                  {' '}
                  <code>Create a new release</code>
                  .
                </li>
                <li>
                  Where it asks you to supply the
                  {' '}
                  <code>Tag Version</code>
                  {' '}
                  enter the version
                  you just specified in your
                  {' '}
                  <code>package.json</code>
                  {' '}
                  in the prior step.
                </li>
                <li>
                  Make sure the target is the
                  {' '}
                  <code>master</code>
                  {' '}
                  branch.
                </li>
                <li>Add a title for the release (normally this is the same as the version).</li>
                <li>Enter a description of your data.</li>
                <li>
                  Click
                  {' '}
                  <code>Publish release</code>
                  .
                </li>
              </ol>
            </li>
            <li>
              <b>Download a copy of the release data</b>
              <ol>
                <li>
                  On the newly created release page, click on the
                  {' '}
                  <code>source code (tar.gz)</code>
                  {' '}
                  link and download the file to your local device.
                </li>
              </ol>
            </li>
            <li>
              <b>Upload the release data to Zenodo</b>
              <ol>
                <li>Return to the browser tab in which you are creating your new upload.</li>
                <li>Add the newly downloaded release file to the upload.</li>
                <li>
                  Fill in the following metadata fields:
                  <br />
                  <ul>
                    <li>
                      <b>Communities:</b>
                      {' '}
                      Add the
                      {' '}
                      <code>
                        perseids-project
                      </code>
                      {' '}
                      community and any others that may be relevant.
                    </li>
                    <li>
                      <b>Upload type:</b>
                      {' '}
                      Dataset.
                    </li>
                    <li>
                      <b>Basic information:</b>
                      <ul>
                        <li>
                          <b>Title:</b>
                          {' '}
                          The title of the treebank collection.
                        </li>
                        <li>
                          <b>Authors:</b>
                          {' '}
                          The author(s) who contributed to the treebanks.
                        </li>
                        <li>
                          <b>Description:</b>
                          {' '}
                          A description of the dataset.
                        </li>
                        <li>
                          <b>Version:</b>
                          {' '}
                          The release version.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>License:</b>
                      <ul>
                        <li>
                          <b>Access right:</b>
                          {' '}
                          Open Access.
                        </li>
                        <li>
                          <b>License:</b>
                          {' '}
                          Whatever license you are using for your data
                          (e.g.Creative Commons Attribution 4.0 International).
                        </li>
                      </ul>
                    </li>
                    <li>Any other fields that are relevant for your data set.</li>
                  </ul>
                </li>
                <li>
                  Click
                  {' '}
                  <code>Publish</code>
                </li>
              </ol>
            </li>
            <p>
              At this point your treebank-template home page should have the DOI link
              at the bottom and it should link directly to your data in Zenodo.
            </p>
          </ol>
        </div>
      </div>
    </div>
  </>
);

Doi.propTypes = {
  config: configType.isRequired,
};

export default Doi;
