var inherits = require('util').inherits;

module.exports = function(Service, Characteristic) {
    var CommunityTypes = {};

    CommunityTypes.TotalConsumption1 = function() {
        Characteristic.call(this, 'Total Consumption (kWh*1000)', 'E863F10C-079E-48FF-8F27-9C2605A29F52');
        this.setProps({
            format: api.hap.Formats.FLOAT,
            unit: api.hap.Units.SECONDS,
            maxValue: 4294967295,
            minValue: 0,
            minStep: 1,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.TotalConsumption1, Characteristic);

    CommunityTypes.CurrentConsumption1 = function() {
        Characteristic.call(this, 'Current Consumption (W*10)', 'E863F10D-079E-48FF-8F27-9C2605A29F52');
        this.setProps({
            format: api.hap.Formats.FLOAT,
            unit: api.hap.Units.SECONDS,
            maxValue: 65535,
            minValue: 0,
            minStep: 1,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.CurrentConsumption1, Characteristic);

    CommunityTypes.KilowattHours = function() {
        Characteristic.call(this, 'Total Consumption', 'E863F10C-079E-48FF-8F27-9C2605A29F52');
        this.setProps({
            format: api.hap.Formats.UINT32,
            unit: 'kWh',
            minValue: 0,
            maxValue: 65535,
            minStep: 1,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.KilowattHours, Characteristic);

    CommunityTypes.Watts = function() {
        Characteristic.call(this, 'Consumption', 'E863F10D-079E-48FF-8F27-9C2605A29F52');
        this.setProps({
            format: api.hap.Formats.UINT16,
            unit: 'W',
            minValue: 0,
            maxValue: 65535,
            minStep: 1,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.Watts, Characteristic);


    // Characteristics
    CommunityTypes.Timestamp = function() {
        Characteristic.call(this, "Timestamp", 'FF000001-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.Timestamp, Characteristic);

    CommunityTypes.AudioDataURL = function() {
        Characteristic.call(this, "Audio URL", 'FF000002-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
    };
    inherits(CommunityTypes.AudioDataURL, Characteristic);

    CommunityTypes.VideoDataURL = function() {
        Characteristic.call(this, "Video URL", 'FF000003-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
    };
    inherits(CommunityTypes.VideoDataURL, Characteristic);

    CommunityTypes.AudioVolume = function() {
        Characteristic.call(this, 'Audio Volume', '00001001-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT8,
            unit: api.hap.Units.PERCENTAGE,
            maxValue: 100,
            minValue: 0,
            minStep: 1,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.AudioVolume, Characteristic);

    CommunityTypes.Muting = function() {
        Characteristic.call(this, 'Muting', '00001002-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT8,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.Muting, Characteristic);

    CommunityTypes.PlaybackState = function() {
        Characteristic.call(this, 'Playback State', '00002001-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT8,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.PlaybackState, Characteristic);
    CommunityTypes.PlaybackState.PLAYING = 0;
    CommunityTypes.PlaybackState.PAUSED = 1;
    CommunityTypes.PlaybackState.STOPPED = 2;

    CommunityTypes.SkipForward = function() {
        Characteristic.call(this, 'Skip Forward', '00002002-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.BOOL,
            perms: [api.hap.Perms.WRITE]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.SkipForward, Characteristic);

    CommunityTypes.SkipBackward = function() {
        Characteristic.call(this, 'Skip Backward', '00002003-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.BOOL,
            perms: [api.hap.Perms.WRITE]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.SkipBackward, Characteristic);

    CommunityTypes.ShuffleMode = function() {
        Characteristic.call(this, 'Shuffle Mode', '00002004-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT8,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.ShuffleMode, Characteristic);
    //NOTE: If GROUP or SET is not supported, accessories should coerce to ALBUM.
    // If ALBUM is not supported, coerce to ITEM.
    // In general, it is recommended for apps to only assume OFF, ITEM, and ALBUM
    // are supported unless it is known that the accessory supports other settings.
    CommunityTypes.ShuffleMode.OFF = 0;
    //NOTE: INDIVIDUAL is deprecated.
    CommunityTypes.ShuffleMode.ITEM = CommunityTypes.ShuffleMode.INDIVIDUAL = 1;
    CommunityTypes.ShuffleMode.GROUP = 2; // e.g. iTunes "Groupings"
    CommunityTypes.ShuffleMode.ALBUM = 3; // e.g. album or season
    CommunityTypes.ShuffleMode.SET = 4; // e.g. T.V. Series or album box set

    CommunityTypes.RepeatMode = function() {
        Characteristic.call(this, 'Repeat Mode', '00002005-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT8,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.RepeatMode, Characteristic);
    CommunityTypes.RepeatMode.OFF = 0;
    CommunityTypes.RepeatMode.ONE = 1;
    CommunityTypes.RepeatMode.ALL = 2;

    CommunityTypes.PlaybackSpeed = function() {
        Characteristic.call(this, 'Playback Speed', '00002006-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.FLOAT,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.PlaybackSpeed, Characteristic);

    CommunityTypes.MediaCurrentPosition = function() {
        Characteristic.call(this, 'Media Current Position', '00002007-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.FLOAT, // In seconds
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaCurrentPosition, Characteristic);

    CommunityTypes.MediaItemName = function() {
        Characteristic.call(this, 'Media Name', '00003001-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaItemName, Characteristic);

    CommunityTypes.MediaItemAlbumName = function() {
        Characteristic.call(this, 'Media Album Name', '00003002-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaItemAlbumName, Characteristic);

    CommunityTypes.MediaItemArtist = function() {
        Characteristic.call(this, 'Media Artist', '00003003-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaItemArtist, Characteristic);

    CommunityTypes.MediaItemDuration = function() {
        Characteristic.call(this, 'Media Duration', '00003005-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.FLOAT, // In seconds
            perms: [api.hap.Perms.READ, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaItemDuration, Characteristic);

    CommunityTypes.StillImage = function() {
        Characteristic.call(this, 'Still Image', '00004001-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.DATA,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.StillImage, Characteristic);

    // Also known as MIME type...
    CommunityTypes.MediaTypeIdentifier = function() {
        Characteristic.call(this, 'Media Type Identifier', '00004002-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.STRING,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = null;
    };
    inherits(CommunityTypes.MediaTypeIdentifier, Characteristic);

    CommunityTypes.MediaWidth = function() {
        Characteristic.call(this, 'Media Width', '00004003-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT32,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaWidth, Characteristic);

    CommunityTypes.MediaHeight = function() {
        Characteristic.call(this, 'Media Width', '00004004-0000-1000-8000-135D67EC4377');
        this.setProps({
            format: api.hap.Formats.UINT32,
            perms: [api.hap.Perms.READ, api.hap.Perms.WRITE, api.hap.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };
    inherits(CommunityTypes.MediaHeight, Characteristic);

    // Services

    CommunityTypes.AudioDeviceService = function(displayName, subtype) {
        Service.call(this, displayName, '00000001-0000-1000-8000-135D67EC4377', subtype);

        // Required Characteristics
        this.addCharacteristic(CommunityTypes.AudioVolume);

        // Optional Characteristics
        this.addOptionalCharacteristic(CommunityTypes.Muting);
        this.addOptionalCharacteristic(Characteristic.Name);
    };
    inherits(CommunityTypes.AudioDeviceService, Service);

    CommunityTypes.PlaybackDeviceService = function(displayName, subtype) {
        Service.call(this, displayName, '00000002-0000-1000-8000-135D67EC4377', subtype);

        // Required Characteristics
        this.addCharacteristic(CommunityTypes.PlaybackState);

        // Optional Characteristics
        this.addOptionalCharacteristic(CommunityTypes.SkipForward);
        this.addOptionalCharacteristic(CommunityTypes.SkipBackward);
        this.addOptionalCharacteristic(CommunityTypes.ShuffleMode);
        this.addOptionalCharacteristic(CommunityTypes.RepeatMode);
        this.addOptionalCharacteristic(CommunityTypes.PlaybackSpeed);
        this.addOptionalCharacteristic(CommunityTypes.MediaCurrentPosition);
        this.addOptionalCharacteristic(CommunityTypes.MediaItemName);
        this.addOptionalCharacteristic(CommunityTypes.MediaItemAlbumName);
        this.addOptionalCharacteristic(CommunityTypes.MediaItemArtist);
        this.addOptionalCharacteristic(CommunityTypes.MediaItemDuration);
        this.addOptionalCharacteristic(Characteristic.Name);
        // Artwork characteristics...would be better reported in a separate service?
        this.addOptionalCharacteristic(CommunityTypes.StillImage);
        this.addOptionalCharacteristic(CommunityTypes.MediaTypeIdentifier);
        this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
        this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
    };
    inherits(CommunityTypes.PlaybackDeviceService, Service);

    // A media information service that has no playback controls, for e.g. DAB radio...
    CommunityTypes.MediaInformationService = function(displayName, subtype) {
        Service.call(this, displayName, '00000003-0000-1000-8000-135D67EC4377', subtype);

        // Required Characteristics
        this.addCharacteristic(CommunityTypes.MediaItemName);

        // Optional Characteristics
        this.addOptionalCharacteristic(CommunityTypes.MediaItemAlbumName);
        this.addOptionalCharacteristic(CommunityTypes.MediaItemArtist);
        this.addOptionalCharacteristic(CommunityTypes.MediaItemDuration);
        this.addOptionalCharacteristic(CommunityTypes.MediaCurrentPosition);
        this.addOptionalCharacteristic(Characteristic.Name);
        // Artwork characteristics...would be better reported in a separate service?
        this.addOptionalCharacteristic(CommunityTypes.StillImage);
        this.addOptionalCharacteristic(CommunityTypes.MediaTypeIdentifier);
        this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
        this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
    };
    inherits(CommunityTypes.MediaInformationService, Service);

    CommunityTypes.StillImageService = function(displayName, subtype) {
        Service.call(this, displayName, '00000004-0000-1000-8000-135D67EC4377', subtype);

        // Required Characteristics
        this.addCharacteristic(CommunityTypes.StillImage);
        this.addCharacteristic(CommunityTypes.MediaTypeIdentifier);

        // Optional Characteristics
        this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
        this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
        this.addOptionalCharacteristic(Characteristic.Name);
    };
    inherits(CommunityTypes.StillImageService, Service);

    CommunityTypes.SecurityCameraService = function(displayName, subtype) {
        Service.call(this, displayName, '00000005-0000-1000-8000-135D67EC4377', subtype);

        // Required Characteristics
        this.addCharacteristic(CommunityTypes.StillImageService);
        this.addCharacteristic(CommunityTypes.MediaTypeIdentifier);

        // Optional Characteristics
        this.addOptionalCharacteristic(CommunityTypes.Timestamp);
        this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
        this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
        this.addOptionalCharacteristic(CommunityTypes.VideoDataURL);
        this.addOptionalCharacteristic(CommunityTypes.AudioDataURL);
        this.addOptionalCharacteristic(Characteristic.MotionDetected);
        this.addOptionalCharacteristic(Characteristic.StatusTampered);
        this.addOptionalCharacteristic(Characteristic.Name);
    };

    return CommunityTypes;
};