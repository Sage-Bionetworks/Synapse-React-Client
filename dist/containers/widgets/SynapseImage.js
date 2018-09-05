var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { getFiles, getEntity as _getEntity } from '../../utils/SynapseClient';

var SynapseImage = function (_React$Component) {
    _inherits(SynapseImage, _React$Component);

    function SynapseImage() {
        _classCallCheck(this, SynapseImage);

        var _this = _possibleConstructorReturn(this, (SynapseImage.__proto__ || Object.getPrototypeOf(SynapseImage)).call(this));

        _this.getEntity = _this.getEntity.bind(_this);
        _this.getSynapseFiles = _this.getSynapseFiles.bind(_this);
        _this.compareById = _this.compareById.bind(_this);

        _this.state = {
            isLoaded: false,
            preSignedURL: ""
        };

        return _this;
    }

    _createClass(SynapseImage, [{
        key: 'compareById',
        value: function compareById(fileName, key) {
            return function (element) {
                return element[key] === fileName;
            };
        }

        /**
         * Attach markdown to wiki attachments
         */

    }, {
        key: 'matchToHandle',
        value: function matchToHandle(comparator, objectList) {
            if (objectList) {
                // make sure the files have loaded
                var filtered = objectList.filter(comparator);
                return filtered;
            }
        }
    }, {
        key: 'getEntity',
        value: function getEntity() {
            var _this2 = this;

            var _props = this.props,
                token = _props.token,
                synapseId = _props.synapseId;

            _getEntity(token, synapseId).then(function (data) {
                var fileHandleAssociationList = [{
                    fileHandleId: data.dataFileHandleId,
                    associateObjectId: synapseId,
                    associateObjectType: "FileEntity"
                }];
                _this2.getSynapseFiles(fileHandleAssociationList, data.dataFileHandleId);
            });
        }
    }, {
        key: 'getSynapseFiles',
        value: function getSynapseFiles(fileHandleAssociationList, id) {
            var _this3 = this;

            // overload the method for two different use cases, one where
            // the image is attached to an entity and creates a list on the spot,
            // the other where list is passed in from componentDidMount in MarkdownSynapse
            var request = {
                requestedFiles: fileHandleAssociationList,
                includePreSignedURLs: true,
                includeFileHandles: false,
                includePreviewPreSignedURLs: false
            };
            getFiles(request, this.props.token).then(function (data) {
                var match = _this3.matchToHandle(_this3.compareById(id, "fileHandleId"), data.requestedFiles);
                _this3.setState({
                    preSignedURL: match[0].preSignedURL
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.token) {
                return;
            }
            if (!this.props.hasOwnProperty("wikiId")) {
                this.getEntity();
            } else {
                var _props2 = this.props,
                    fileName = _props2.fileName,
                    fileResults = _props2.fileResults;

                var match = this.matchToHandle(this.compareById(fileName, "fileName"), fileResults);
                var fileHandleAssociationList = [{
                    fileHandleId: match[0].id,
                    associateObjectId: this.props.wikiId,
                    associateObjectType: "WikiAttachment"
                }];
                this.getSynapseFiles(fileHandleAssociationList, match[0].id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.isLoaded) {
                return null;
            } else {
                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement('img', { alt: 'synapse', className: 'img-fluid', src: this.state.preSignedURL })
                );
            }
        }
    }]);

    return SynapseImage;
}(React.Component);

SynapseImage.propTypes = {
    wikiId: PropTypes.string,
    synapseId: PropTypes.string,
    token: PropTypes.string,
    fileName: PropTypes.string,
    fileResults: PropTypes.array
};

export default SynapseImage;